class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :image_id
      t.string :name
      t.integer :cost
      t.integer :rarity
      t.string :type

      t.timestamps
    end
  end
end
