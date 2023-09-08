class AddRessourcesToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :ressources, :string
  end
end
