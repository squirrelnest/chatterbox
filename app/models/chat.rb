class Chat < ApplicationRecord

  # belongs_to :location
  # belongs_to :user

  validates_presence_of :content

end
