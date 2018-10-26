class CreateChats < ActiveRecord::Migration[5.1]
  def change
    create_table :chats do |t|
      t.string :content
      t.column :date_posted, :timestamptz, null: false
    end
  end
end
