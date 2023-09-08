class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :ressources, :description, :image
  has_many :posts
  has_many :users, through: :posts
end
