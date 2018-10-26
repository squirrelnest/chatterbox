class ApplicationController < ActionController::API

  include ActionController::Helpers

  include Knock::Authenticable

  # before_action :current_user
  # helper_method :current_user
  #
  # def current_user
  #   @user = User.find_by(id: session[:user_id])
  #   @user
  # end

end
