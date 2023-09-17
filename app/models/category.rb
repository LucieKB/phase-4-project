class Category < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :users, through: :posts
    has_many :resources, dependent: :destroy

    validates :name, uniqueness:true
end
