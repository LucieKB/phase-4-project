class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

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
        post = find_post
        render json: post
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = find_post
        post.update!(post_params)
        render json: post, status: :accepted
    end

    def destroy
        post = find_post
        post.delete
        head :no_content
    end



    private

    def find_post
        Post.find_by(id: params[:id])
    end

    def post_params
        params.permit(:title, :content)
    end

    def render_not_found_response
        render json: "Post not found.", status: :not_found 
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
