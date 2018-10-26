class UserSerializer < ActiveModel::Serializer
  attributes :admin, :id, :username
  has_many :reviews
end
