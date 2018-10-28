class ChatsController < ApplicationController

  def hello
    render 'hello'
  end

  def index
    @chats = Chat.all
    render json: @chats, status: 200
  end

  def new
    @chat = Chat.new
  end

  def create
    @chat = Chat.new(chat_params)
    @chat.save unless !@chat.content
    @chats = Chat.all
    render json: @chats, status: 200
  end

  def show
    @chat = Chat.find(params[:id])
    render json: @chat, status: 200
  end

  def destroy
    Chat.all.each do |chat|
      chat.destroy
    end
    @chats = Chat.all
    render json: @chats, status: 200
  end

  private

    def chat_params
      params.require(:chat).permit(:content)
    end

end
