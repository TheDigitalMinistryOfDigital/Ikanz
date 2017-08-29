data = {
    pictures: [],
    tags: []
}

target_prefix = '../img/'
target_suffix = '.png'

path = '/Users/natyoung/dev/Ikanz/src/img/'

files = Dir["#{path}*.png"].map {|i| i.gsub("#{path}", '')  }
files = files.map {|i| i.gsub('.png', '')  }

files.each_with_index do |file, i|
  pic_id = i + 1
  data[:pictures] << { id: pic_id, src: "require('#{target_prefix}#{file}#{target_suffix}')" }

  file.split('_').each do |tag|

    new_tag = {}
    new = false
    data[:tags].each do |dt|
      if dt.key(tag) != nil
        dt[:pictures] << pic_id
      else
        new = true
        new_tag = { name: tag, pictures: [pic_id] }
      end
    end

    if new
      data[:tags] << new_tag
    end

  end
end
