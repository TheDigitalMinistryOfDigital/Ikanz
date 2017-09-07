data = {
    pictures: [],
    tags: []
}

target_prefix = '../img/'
target_suffix = '.png'

path = '/Users/natyoung/Downloads/img/'

files = Dir["#{path}*.png"].map {|i| i.gsub("#{path}", '')  }
files = files.map {|i| i.gsub('.png', '')  }

tags = {}

files.each_with_index do |file, i|
  pic_id = i + 1

  file.split('_').each do |tag|
    if tags[tag] == nil
      tags[tag] = [pic_id]
    else
      tags[tag] << pic_id
    end

  end

  data[:pictures] << { id: pic_id, src: "require('#{target_prefix}#{pic_id}#{target_suffix}')" }

  File.rename("#{path}#{file}.png", "#{path}#{pic_id}.png")
end

data[:tags] = tags.map do |t|
  {
      name: t[0],
      pictures: t[1]
  }
end