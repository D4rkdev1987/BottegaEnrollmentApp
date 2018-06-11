class CreateApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :applications do |t|
      t.string :course
      t.string :fname
      t.string :lname
      t.string :email
      t.string :phone
      t.string :street
      t.string :street2
      t.string :city
      t.string :state
      t.string :zip
      t.date :dob
      t.integer :gender
      t.integer :military_status
      t.integer :education
      t.integer :experience
      t.integer :employment
      t.integer :salary

      t.timestamps
    end
  end
end
