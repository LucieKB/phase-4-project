class AddDetailsToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :name, :string
    add_column :resources, :site_url, :string
    add_column :resources, :resource_type, :string
    add_column :resources, :category_id, :string
  end
end
