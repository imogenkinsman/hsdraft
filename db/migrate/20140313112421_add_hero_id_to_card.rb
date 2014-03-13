class AddHeroIdToCard < ActiveRecord::Migration
  def change
    add_column :cards, :hero_id, :integer
  end
end
