class UsersController < ApplicationController

  before_action :authenticate_user, only: [:reviews]

  # def index
  #   @users = User.all
  # end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 200
    else
      redirect_to '/signup'
    end
  end

  def reviews
    # @reviews = Review.all
    @reviews = @user.reviews
    # @reviews      = Review.all
    # @location_ids = reviews.pluck(:location_id)
    # @locations    = Review.where(:_id.in => location_ids)
    render json: @reviews, status: 200
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end
