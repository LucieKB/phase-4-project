# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
puts "seeding..."

10.times do
User.create!(username: Faker::Internet.username(specifier: 4-10), state: Faker::Address.state, grades_taught: rand(1..12).to_s, years_experience: rand(0..59), subjects_taught: Faker::Educator.subject, img_url: Faker::Avatar.image, password: "1234")
end

category1 = Category.create!(name: "Lesson Prep", description: Faker::Quotes::Shakespeare.hamlet_quote)
category2 = Category.create!(name: "Classroom Management", description: Faker::Quotes::Shakespeare.hamlet_quote)
category3 = Category.create!(name: "Communication with Parents", description: Faker::Quotes::Shakespeare.hamlet_quote)
category4 = Category.create!(name: "School Staff Relationships", description: Faker::Quotes::Shakespeare.hamlet_quote)
category5 = Category.create!(name: "First Year Teacher", description: Faker::Quotes::Shakespeare.hamlet_quote)
category6 = Category.create!(name: "Useful Apps", description: Faker::Quotes::Shakespeare.hamlet_quote)
category7 = Category.create!(name: "Mental Health Support", description: Faker::Quotes::Shakespeare.hamlet_quote)
category8 = Category.create!(name: "Other", description: Faker::Quotes::Shakespeare.hamlet_quote)

30.times do
    Post.create!(user_id: User.all.sample.id, category_id: Category.all.sample.id, title: Faker::Emotion.adjective, content: Faker::Quote.famous_last_words, date: Faker::Date.backward )
end

30.times do
    Resource.create!(category_id: Category.all.sample.id, name: Faker::Educator.course_name, description: Faker::Movies::Lebowski.quote, site_url: Faker::Internet.url, resource_type: ["app", "website", "music", "tutorial", "TV serie", "movie"].sample)
end

puts "✅ Done seeding!"
