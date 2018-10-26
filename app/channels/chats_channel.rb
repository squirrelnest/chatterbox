class ChatsChannel < ApplicationCable::Channel

  # called when client connects to server
  def subscribed
    # @chat = Chat.find_by(id: params[:room])
    # stream_from 'chat_channel'
    stream_from 'chats'
  end

  def received(data)

    # @chat = Chat.find(data["id"])
    @chat = Chat.new(content: data["content"])
    @chat.save unless !@chat.content
    @chats = Chat.all
    ActionCable.server.broadcast('chats', @chats)
  end

  def unsubscribed
    #any cleanup needed
  end

end
