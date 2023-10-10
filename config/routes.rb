Rails.application.routes.draw do
  
  resources :categories do
  resources :posts, only: [:index, :show, :create]
  end
  resources :posts
  resources :resources, only: [:index, :create]
  resources :users, only: [:create, :index, :show]


  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete"/logout", to: "sessions#destroy"

 
 get "moreposts/:num", to: "categories#find_writer"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

# create a custom route that takes a parameter of a number and finds all the categories that have more than that number of posts associated with them. Once you have the categories, find the first post of all the users associated with that category. If no categories are found, render back a json message that says so. I would say find all the users associated with the category and then get each of their first post.
