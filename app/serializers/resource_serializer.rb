class ResourceSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :site_url, :resource_type, :category_id
end
