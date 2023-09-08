class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :date
  has_one :category
  has_one :user
end
