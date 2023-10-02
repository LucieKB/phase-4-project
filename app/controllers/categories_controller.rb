class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters format:[]
    #take off after dvpt
    # skip_before_action :authorized

    def index
        categories = Category.all
        render json: categories, status: :ok
    end

    def show
        category = find_category
        render json: category
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        category = find_category
        category.update!(category_params)
        render json: category, status: :accepted
    end

    def destroy
        category = find_category
        category.destroy
        head :no_content
        
    end


    private

    def find_category
        Category.find_by(id: params[:id])
    end

    def category_params
        params.permit(:id, :name, :resources, :description, :image, :date, :category_id, :post)
    end

    def render_not_found_response
        render json: "Category not found.", status: :not_found 
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
