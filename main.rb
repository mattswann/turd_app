require 'sinatra'
# require "sinatra/reloader"
# require "bundler/setup"
# require "haml"
# require 'sass'
# require "logger"
# require "active_support"
# require "action_view"
# require "cloudinary"
# require "pubnub"


# PUBNUB_PUBLISH_KEY = ENV['pub-c-41ce2418-7500-47bf-943e-54337b461b2e'] # Something like: 'pub-c-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
# PUBNUB_SUBSCRIBE_KEY = ENV['sub-c-9160cb1e-836e-11e5-9720-0619f8945a4f'] # Something like: 'sub-c-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
#
# PUBNUB_CHANNEL = 'cloudinary_photo_share'
#
# helpers do
#   include CloudinaryHelper
#   def controller() nil end
#   def config() nil end
# end



get '/' do
  erb :index
end


get '/talk' do

  erb :talk
end



# post '/photos' do
#
#   f params[:photo_id].present?
#     # Process and verify the received signed photo identifier
#     preloaded = Cloudinary::PreloadedFile.new(params[:photo_id])
#     return { :success => false, :message => "Invalid upload signature" }.to_json if !preloaded.valid?
#
#     # Intialize PubNub
#     pubnub = Pubnub.new( :publish_key => PUBNUB_PUBLISH_KEY, :subscribe_key => PUBNUB_SUBSCRIBE_KEY )
#
#     # Publish a message to the PubNub channel, including the identifier of the image uploaded to Cloudinary.
#     pubnub.publish({
#       :channel => PUBNUB_CHANNEL,
#       :message => {
#         cloudinary_photo_id: preloaded.identifier,
#         user: params[:user],
#         message: params[:message],
#         kind: params[:kind],
#         time: Time.now.utc.iso8601
#       },
#       :callback => lambda { |x| $stderr.puts("Shared #{preloaded.public_id}: #{x}") }
#     })
#     content_type :json
#     { :success => true }.to_json
#   end
# end
