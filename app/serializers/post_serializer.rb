class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :date, :user_id, :user

  has_one :category
  has_one :user
end
