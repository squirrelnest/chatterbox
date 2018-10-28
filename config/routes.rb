Rails.application.routes.draw do

  resources :notes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  ################## WEBSOCKET ROUTES ##################

  get '/chat', to: 'chats#index'
  post '/chat', to: 'chats#create'
  delete '/chat/clear' => 'chats#destroy'

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  ################## GRAPHQL ROUTES - reads only ##################

  # post '/graphql', to: 'graphql#execute'

  ################## ~RESTFUL ROUTES - reads and writes ##################

  root 'chats#index'

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
