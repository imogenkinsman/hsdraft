class ChangeChampionToHeroId < ActiveRecord::Migration
  def change
    change_column :drafts, :champion, 'integer USING CAST(champion AS integer)'
    rename_column :drafts, :champion, :hero_id
  end
end
