class CategoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        categories = Category.all
        render json: categories, status: :ok
    end

    def show
        category = find_category
        render json: category
    end

    def create
        Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        category = find_category
        category.update!(post_params)
        render json: category, status: :accepted
    end

    def destroy
        category = find_category
        category.delete
        head :no_content
    end

    private

    def find_category
        Category.find_by(id: params[:id])
    end

    def category_params
        params.permit(:id, :name, :resources, :description, :image)
    end

    def category_params_update
        params.permit(:resources)
    end

    def render_not_found_response
        render json: "Category not found.", status: :not_found 
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
