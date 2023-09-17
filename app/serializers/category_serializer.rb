class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :resources, :description, :image, :category_with_posts

  has_many :posts
  has_many :users
  has_many :resources

  def category_with_posts
    object.posts.map{ |post|{
      post_id: post.id,
      title: post.title,
      content: post.content,
      username: post.user.username,
      user_id: post.user.id,
      user_avatar: post.user.img_url
    }
  }
  end

end
