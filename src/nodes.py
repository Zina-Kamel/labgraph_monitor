from itertools import groupby

edges = [('NoiseGenerator', 'RollingAverager'),('RollingAverager', 'AveragedNoise'),('AveragedNoise', 'Plot')]

# constructs an adjacency list from the edges list

iterator = groupby(edges, lambda e: e[0])

adjacency_list = {key: [val[1] for val in grp] for key, grp in iterator}

print(adjacency_list)
