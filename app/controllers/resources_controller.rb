class ResourcesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters format:[]


    def index
        resources = Resource.all
        render json: resources, status: :ok
    end

    def create
        resource = Resource.create!(category_params)
        render json: resource, status: :created
    end


    def destroy
        resource = find_resource
        resource.destroy
        head :no_content
        
    end


    private

    def find_resource
        Resource.find_by(id: params[:id])
    end

    def category_params
        params.permit(:id, :name, :description, :site_url, :resource_type, :category_id)
    end

    def render_not_found_response
        render json: "Resource not found.", status: :not_found 
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
