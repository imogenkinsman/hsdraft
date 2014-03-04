class AddDraftIdToSelection < ActiveRecord::Migration
  def change
    add_column :selections, :draft_id, :integer
  end
end
