class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :categories, through: :posts

    validates :username, presence:true
    validates :username, uniqueness:true
    validates :state, presence:true
    validates :years_experience, numericality:{less_than_or_equal_to: 60}

    PASSWORD_REQUIREMENTS = /\A 
    (?=.{6,10}) 
    (?=.*\d)
    (?=.*[A-Z])
    (?=.*[[:^alnum:]])
    /x

    validates :password, format: PASSWORD_REQUIREMENTS

    def user_categories
        categories_used = self.categories.map{|c| {c.name => c.id}}
        categories_used.group_by {|v| v }.map { |k, v| [k, v.size] }.to_h  
    end

    def user_posts_categories
        categories_used = self.posts.map{|cat| cat.category.id}.uniq
        user_posts = self.posts
    end

end

# ‘?=’ tells our program to look from the start of the string at what it contains.
#  ‘.’ tells our regexp token that there should be no characters before what we pass the regexp token next.
# the ‘{6,10}’  minimum length of 6, max of 10.
# .* combination denotes that the number could be the first character in the string (.) or have some other characters come before it (*).
# \d we're looking for a number or digit
# [A-Z] at least one uppercase letter
# [[:^alnum:]] at least one symbol
