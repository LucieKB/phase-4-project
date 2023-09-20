class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :date, :user_id, :user, :category

  has_one :category
  has_one :user
end
