class AddSelectionIdToComments < ActiveRecord::Migration
  def change
    add_column :comments, :selection_id, :integer
  end
end
