class Category < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts

    validates :name, uniqueness:true
end
