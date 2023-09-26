class Resource < ApplicationRecord
    belongs_to :category

    validates :name, presence:true
    validates :name, uniqueness:true

    def user_name
        self.user.username
    end
end
