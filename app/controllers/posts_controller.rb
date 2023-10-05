class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters format:[]
    #take off after dvpt
    # skip_before_action :authorized

    def index
        if params[:category_id]
            category = Category.find(params[:category_id])
            posts = category.posts
        else
        posts = Post.all
        end
        render json: posts, status: :ok
    end

    def show
        post = Post.all.find_by(id: params[:id])
        render json: post
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = @current_user.posts.find_by(id: params[:id])
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def destroy
        post = @current_user.posts.find_by(id: params[:id])
        post.delete
        head :no_content
    end



    private


    def post_params
        params.permit(:id, :title, :content, :date, :category_id, :user)
    end

    def render_not_found_response
        render json: "Post not found.", status: :not_found 
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
