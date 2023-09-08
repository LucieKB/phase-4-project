class Category < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :name, uniqueness:true
end
