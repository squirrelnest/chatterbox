Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  ################## GRAPHQL ROUTES - reads only ##################

  post '/graphql', to: 'graphql#execute'

  get '/chat', to: 'chats#index'
  post '/chat', to: 'chats#create'
  delete '/chat/clear' => 'chats#destroy'
  mount ActionCable.server => '/cable
  '
  ################## ~RESTFUL ROUTES - reads and writes ##################

  root 'locations#index'

  # resources :locations & :reviews

  get '/locations/nearby/:lon/:lat' => 'locations#nearby', :constraints => { :lon => /[^\/]+/, :lat => /[^\/]+/ }
  get '/locations/geojson' => 'locations#geojson'
  get '/locations/by_country/:country' => 'locations#by_country'
  get '/locations/new/:lon/:lat' => 'locations#new', :constraints => { :lon => /[^\/]+/, :lat => /[^\/]+/ }
  get '/locations/get_country/:lon/:lat' => 'locations#get_country', :constraints => { :lon => /[^\/]+/, :lat => /[^\/]+/ }
  get '/locations/mapbox_token' => 'locations#mapbox_token', :constraints => { :lon => /[^\/]+/, :lat => /[^\/]+/ }

  resources :locations do
    resources :reviews
  end

  # resources :reviews

  resources :reviews

  # resources :users

  resources :users
  get '/my-reviews' => 'users#reviews'
  get '/signup' => 'users#new'
  post '/register' => 'users#create'

  get '/logout' => 'sessions#destroy'

  # Knock JWT authentication

  post 'user_token' => 'user_token#create'

  # resources :sessions

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  get '/auth/facebook/callback' => 'sessions#fb_auth'

end
