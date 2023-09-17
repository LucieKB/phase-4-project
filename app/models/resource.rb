class Resource < ApplicationRecord
    belongs_to :category

    validates :name, presence:true
    validates :name, uniqueness:true
    validates :site_url, presence:true
end
