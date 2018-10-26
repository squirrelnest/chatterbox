class Chat < ApplicationRecord

  # belongs_to :user

  validates_presence_of :content
  
  # after_create_commit { ChatBroadcastJob.perform_later(self) }

end
