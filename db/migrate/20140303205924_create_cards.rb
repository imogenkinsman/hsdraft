class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :curse_url
      t.string :name
      t.integer :cost
      t.integer :rarity
      t.string :type

      t.timestamps
    end
  end
end
