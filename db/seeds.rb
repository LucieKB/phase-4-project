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

User.create(username: "LucieKB", state: "Utah", grades_taught: ['Lower Elementary: 1-3rd', 'Upper Elementary: 4-5th', 'Middle School: 6-7th'], years_experience: 15, subjects_taught:"foreign languages", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/285px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg", password: "5678" )

category1 = Category.create!(name: "Lesson Prep", description: "Here you can find resources and tips on how to plan for your lessons efficiently!", image:"https://godforallsd.files.wordpress.com/2016/09/lessonplans2.gif")
category2 = Category.create!(name: "Classroom Management", description: "Managing the class is no easy task, and being able to gather some tips and strategies is very helpful!", image:"https://www.actuabd.com/local/cache-vignettes/L700xH939/arton31201-a089b.jpg?1677666539")
category3 = Category.create!(name: "Communication with Parents", description: "Parents... Both a blessing and a curse. How can we communicate with them honestly, truthfully and maintain a good relationship?", image:"https://skooler.com/wp-content/uploads/skole-hjem1.jpg")
category4 = Category.create!(name: "School Staff Relationships", description: "A school is a micro-society where we need to work as a team (and within teams). Colleague, friend ... Which bounderies should we set?", image:"https://www.aihr.com/wp-content/uploads/employee-relations-background-and-featured-image.png")
category5 = Category.create!(name: "First Year Teacher", description: "Every teacher remember their first year and what they wish they had known then. Here you will find those resources and experiences!", image:"https://static.wixstatic.com/media/106140_d0c3ee38a3094f5e8f77f175c642d32f~mv2_d_3800_3031_s_4_2.jpg/v1/fill/w_1000,h_798,al_c,q_85,usm_0.66_1.00_0.01/106140_d0c3ee38a3094f5e8f77f175c642d32f~mv2_d_3800_3031_s_4_2.jpg")
category6 = Category.create!(name: "Useful Apps", description: "Today, technology is a part of everyday teaching. How can we sort through all the existing apps?", image:"https://ww2.kqed.org/app/uploads/sites/23/2015/07/50-Apps.jpg")
category7 = Category.create!(name: "Mental Health Support", description: "Teaching is hard. Especially in our post-Covid era. It is crucial to maintain a good work/life balance and make caring about our mental health a priority.", image:"https://aliviohealth.com/wp-content/uploads/2022/07/Managing-Mental-Health-During-COVID-19.jpg")


30.times do
    Post.create!(user_id: User.all.sample.id, category_id: Category.all.sample.id, title: Faker::Emotion.adjective, content: Faker::Quote.famous_last_words, date: Faker::Date.backward )
end

30.times do
    Resource.create!(category_id: Category.all.sample.id, name: Faker::Educator.course_name, description: Faker::Movies::Lebowski.quote, site_url: Faker::Internet.url, resource_type: ["📱 Educational Software", "🗓️ Lesson Plans", "🌐 Teacher's blog", "💡 Tips/Advices", "🎶 Music", "🎬 TV Series/Movies suggestions","📚 Book Club", "🧘 Wellness"].sample)
end

puts "✅ Done seeding!"
