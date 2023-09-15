class Post < ApplicationRecord
  belongs_to :category
  belongs_to :user

  validates :title, presence:true
  validates :content, length:{in: 5..200}
end
