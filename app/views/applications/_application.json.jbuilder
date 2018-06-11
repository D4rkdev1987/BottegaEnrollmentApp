json.extract! application, :id, :course, :fname, :lname, :email, :phone, :street, :street2, :city, :state, :zip, :dob, :gender, :military_status, :education, :experience, :employment, :salary, :created_at, :updated_at
json.url application_url(application, format: :json)
