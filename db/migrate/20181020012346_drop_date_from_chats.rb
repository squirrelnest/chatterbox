class DropDateFromChats < ActiveRecord::Migration[5.1]
  def change
    remove_column :chats, :date_posted, :datetime
  end
end
