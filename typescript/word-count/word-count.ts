class Words {
	public count(sentence: string): Map<string,number>{
		return sentence
			.toLowerCase()
			.replace(/\s+/g, ' ')
			.trim()
			.split(' ')
			.reduce((map, word) => {
				map.get(word)
					? map.set(word, map.get(word) + 1)
					: map.set(word, 1);
				
				return map;
			}, new Map());
	}
}

export default Words;
