class CreateSelections < ActiveRecord::Migration
  def change
    create_table :selections do |t|
      t.integer :chosen_card_id
      t.integer :second_card_id
      t.integer :third_card_id

      t.timestamps
    end
  end
end
