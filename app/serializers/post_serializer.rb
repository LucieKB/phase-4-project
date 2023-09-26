class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :date, :user_id, :user_name, :category

 
end
