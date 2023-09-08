class Post < ApplicationRecord
  belongs_to :category
  belongs_to :user

  validates :title, presence:true
  validates :content, length:{in: 10..200}
end
