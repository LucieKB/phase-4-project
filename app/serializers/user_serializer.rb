class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :state, :grades_taught, :years_experience, :subjects_taught, :password_digest, :img_url
  has_many :posts
  has_many :categories, through: :posts
end
