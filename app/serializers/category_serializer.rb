class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :resources, :description, :image

  has_many :posts
  has_many :users
end
