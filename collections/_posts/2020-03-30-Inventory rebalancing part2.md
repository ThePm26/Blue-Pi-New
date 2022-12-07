---
post_image: /assets/images/blog/inventory2.png
layout: post
status: publish
published: true
title: Inventory rebalancing - Part 2
author:
  display_name: Gadoya Parth
  login: 
  email: 
  url: ''
author_login: 
author_email: 
permalink: /blog/inventory-rebalancing-part2/
date: '2020-04-06 13:33:48 +0530'
date_gmt: '2020-04-06 13:33:48 +0530'
meta_description: Implementing linear optimisation for solving imbalance problem using PuLp package in Python
categories:
- retail
tags:
- supplychain
comments:

---
# Inventory rebalancing - Part 2
In [part 1](https://www.bluepiit.com/blog/inventory-rebalancing-part1/), we built a crucial foundation to understand problem of [inventory imbalance](https://www.bluepiit.com/blog/inventory-rebalancing-part1/). Here, in part 2, we will dig deeper into the solution to the presented problem and how we can implement the presented solution in practice with a set of business constraints.

### Outline
* How can we solve it using the Linear Programming model? What are business constraints?**
* Implementing linear optimisation for solving imbalance problem using PuLp package in Python**

### How can we solve it using the Linear Programming model? What are business constraints?

Linear programming is one of the most widely used optimization tools in every industry which operates under conflicting constraints. Here, the problem of inventory imbalance in the retail industry exists with a set of business constraints like transfer can’t happen across regions resulting in intra-region transfer constraint.

Let’s discuss various business constraints in detail to bring a sense of complexity of problem and to understand requirements of proposed solutions.

Below described constraints will be building blocks of linear programming models to ensure solution alignment with business constraints.

### Regional constraints
*   Inter region transfer may seem profitable from a revenue perspective, but it leads to longer lead time and infeasible shipping due to several reasons like higher transportation cost, road conditions due to weather etc.
*   This suggests a model to suggest only intra-region transfers.

### Minimum transfer quantity
*   Stores are allowed to transfer only if the number of units to be transferred is greater than or equal to the minimum transfer quantity to keep cost under control. The number can vary according to logistic rules and size of company.

### Avoid circular transfer
*   It is very common and straightforward to understand that if an article moves out of store then the same article should not enter from other stores, otherwise this cycle will lead to huge unnecessary transfers.

### Shelf life of article
*   It is not a profitable decision to move recent stock, just because every article needs certain shelf-life before it sells. It is very important to consider shelf-life time in the model to ensure transfer of suitable stock for redistribution.

Above constraints can be seen in the majority of the retail industry, but there are some constraints unique to specific businesses which have a unique strategy under which they operate.

For example, some retail chains, specifically in fashion retail, want to have stock of every size of given article. This, as a constraint, suggests transfer which keeps the minimum stock of each size of given article.

**_How can a described situation be modeled as a linear programming (LP) problem?_**
*   Primary objective is to decrease DSI (Days of Sales inventory) and decrease transportation costs. This is mathematically linear in nature, hence suitable for LP.
*   All described constraints can be written as linear inequalities and hence making it suitable for LP.
*   This explains why given problem can be formulated as LP problem and LP optimisation can be employed to solve this problem.

### Implementing linear optimisation for solving imbalance problem using PuLp package in Python

At this point, we have a fair understanding of inventory imbalance problem, under which constraints, design of solution is considered and why linear programming model, as a solution makes sense. This offers a nice opportunity to make our hands dirty now and see the solution in practice.

Like linear programming, Python is a widely used programming language in the field of optimisation and data science. In python, there is a dedicated package/library for solving optimization problems.

Here, we try to demonstrate usage of the PuLp package with a sample dataset. Below implementation can be very useful for applying this solution with any similar real world optimization problems. 

### Dataset for demand, stock and costs
Dataset 1 : Demand and Stock
Format: (store, stock, demand)

### Example dataset

<table border="1">
  <tr>
   <td>Store
   </td>
   <td>Stock
   </td>
   <td>Demand
   </td>
  </tr>
  <tr>
   <td>A
   </td>
   <td>5
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>B
   </td>
   <td>3
   </td>
   <td>6
   </td>
  </tr>
  <tr>
   <td>C
   </td>
   <td>5
   </td>
   <td>3
   </td>
  </tr>
</table>


Above table represents stock and demand in respective stores. Like store B has demand of 6 units but stock of 3 units only. We can observe that, some stores can give stock and some need to receive stock in order to meet demand. For simplicity, we assume the above dataset is considered for any single hypothetical item.

Now, let’s consider a dataset for various costs like transportation cost and holding costs. Before moving any further, it is necessary to understand the purpose of these costs in design of solution. 

Transportation costs define the cost of transfer between any given 2 stores, and holding costs define the cost for holding a single unit of inventory in a given store for a certain duration. Intuitively, holding cost can be seen as a good representative of the DSI metric. High holding cost suggests longer DSI and lower holding cost suggests lower DSI.

### Transportation cost dataset


<table border="1">
  <tr>
   <td>Store
   </td>
   <td>A
   </td>
   <td>B
   </td>
   <td>C
   </td>
  </tr>
  <tr>
   <td>A
   </td>
   <td>0
   </td>
   <td>1
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>B
   </td>
   <td>1
   </td>
   <td>0
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>C
   </td>
   <td>1
   </td>
   <td>1
   </td>
   <td>0
   </td>
  </tr>
</table>


Above table, shows store to store transfer cost. 0 cost shows transfer between same stores and in reality such transfer will not take place. But such every single constraint needs to be part of the solution.

### Holding cost dataset


<table border="1">
  <tr>
   <td>Store
   </td>
   <td>Holding cost
   </td>
  </tr>
  <tr>
   <td>A
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>B
   </td>
   <td>1
   </td>
  </tr>
  <tr>
   <td>C
   </td>
   <td>4
   </td>
  </tr>
</table>


### Solution

_Note_: We will present important code blocks of solutions designed in python programming language.


```
import pulp
```

**Define decision variables**

```
transfer_variables = pulp.LpVariable.dicts(name='X', indexs=indexes,
                      lowBound=0, cat='Integer')

binary_transfer_variables = pulp.LpVariable.dicts(name='Y', indexs=indexes,
                      lowBound=0, upBound = 1, cat='Integer')

ending_inventory_variables = pulp.LpVariable.dicts(name='EI', indexs=u_stores,
                                            lowBound=0, cat='Integer')

satisfied_demand = pulp.LpVariable.dicts(name='SD', indexs=u_stores,
                      lowBound=0, cat='Integer')
```


Here,

`u_stores` holds a list as `['A','B','C']`.


```
indexes holds list as ['A_B', 'A_C', 'B_A', 'B_C', 'C_A', 'C_B']
```


`transfer_variables` define transferred quantity between given stores.

`binary_transfer_variables` define whether transfer happened between given stores or not. `ending_inventory_variables` define remaining stock at store at the end of period given that sale happened according to demand. 

`satisfied_demand` defines the number of units sold at a given store according to new stock (after transfer) and given demand.

**Initialize model**


```
# Define and initialize model
model = pulp.LpProblem(name='Inventory_Redistribution', sense=pulp.LpMinimize)
```

**Define objective function**

```
# Objective function

total_logistic_cost = pulp.lpSum([transportation_cost.loc[tv.split('_')[0]][tv.split('_')[1]]*transfer_variables[tv] for tv in transfer_variables.keys()])
total_holding_cost = pulp.lpSum([holding_cost[s]*ending_inventory_variables[s] for s in u_stores])

objective = total_holding_cost + total_logistic_cost

model.setObjective(objective)
```
**Define constraints**

Below, mathematical representation is also defined alongside the code equivalent. There, X stands for source store and Y stands for destination store, M stands for arbitrary large number and MTQ stands for threshold for minimum transfer quantity for given item.


```
# Setting up binary variable, if transfer happens

# Mathematical representation
Y[X,Y] - X[X,Y] <= 0
X[X,Y] - M*Y[X,Y] <= 0

for key, value in transfer_variables.items():
    model.addConstraint(pulp.LpConstraint(
    e = binary_transfer_variables[key] - transfer_variables[key],
    sense = pulp.LpConstraintLE,
    name = 'Y_'+key+'_1',
    rhs = 0
    ))
    
    model.addConstraint(pulp.LpConstraint(
    e = transfer_variables[key] - M*binary_transfer_variables[key],
    sense = pulp.LpConstraintLE,
    name = 'Y_'+key+'_2',
    rhs = 0
    ))
    
    
# Minimum transfer quantity
# Mathematical representation
X[X,Y] - MTQ*Y[X,Y] >= 0

for key, value in transfer_variables.items():
    model.addConstraint(pulp.LpConstraint(
    e = transfer_variables[key]-MTQ * binary_transfer_variables[key],
    sense = pulp.LpConstraintGE,
    name = 'MTQ_'+key,
    rhs = 0
    ))
    
# Transfer quantity and destination demand
# Mathematical representation
X[X,Y] - Demand[Y] <= 0
for key, value in transfer_variables.items():
    
    model.addConstraint(pulp.LpConstraint(
    e = transfer_variables[key] - demand_dic[key.split('_')[1]],
    sense = pulp.LpConstraintLE,
    name = 'TQ_DEST_DE_'+key,
    rhs = 0
    ))
    
# satisfied demand
# Mathematical representation

SD[store] - Demand[store] <= 0
SD[store] - Stock[store] - TO[store] + TI[store] <=0
(TO stands for Transfer Out from store, and TI stands for Transfer In)

for s in u_stores:    
    model.addConstraint(pulp.LpConstraint(
    e = satisfied_demand[s] - demand_dic[s],
    sense = pulp.LpConstraintLE,
    name = 'SD_DE_'+s,
    rhs = 0
    ))
    
    model.addConstraint(pulp.LpConstraint(
    e = satisfied_demand[s] - closing_dic[s] - pulp.lpSum([transfer_variables[v] for v in transfer_variables.keys() if s in v.split('_')[1]]) + pulp.lpSum([transfer_variables[v] for v in transfer_variables.keys() if s in v.split('_')[0]]) ,
    sense = pulp.LpConstraintLE,
    name = 'SD_INV_'+s,
    rhs = 0
    ))

# ending inventory level
# Mathematical representation

EI[store] - Stock[store] - TO[store] + TI[store] + SD[store] = 0
for s in u_stores:
    model.addConstraint(pulp.LpConstraint(
    e = ending_inventory_variables[s] - closing_dic[s] - pulp.lpSum([transfer_variables[v] for v in transfer_variables.keys() if s in v.split('_')[1]]) + pulp.lpSum([transfer_variables[v] for v in transfer_variables.keys() if s in v.split('_')[0]]) + satisfied_demand[s],
    sense = pulp.LpConstraintEQ,
    name = 'EI_'+s,
    rhs = 0
    ))
```


Solving model and extracting suggested transfers


```
# solve model
model.solve()
```



```
pulp.LpStatus[model.status]
```


Gives


```
'Optimal'
```

Solution.
{% include author_gadoyaparth.html %}