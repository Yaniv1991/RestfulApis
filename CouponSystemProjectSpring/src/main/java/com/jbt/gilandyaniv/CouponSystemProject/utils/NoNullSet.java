package com.jbt.gilandyaniv.CouponSystemProject.utils;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class NoNullSet <E> implements Set<E> {

	final private Set<E> wrappedSet = new HashSet<E>();
	
	@Override
	public boolean add(E e) {
		if(e == null) {
			throw new IllegalArgumentException("Cannot add null to a NoNullSet");
		}
		return wrappedSet.add(e);
	}

	@Override
	public boolean addAll(Collection<? extends E> c) {
		try {
		for (E e : c) {
			add(e);
		}
		}
		catch(IllegalArgumentException e) {
			return false;
		}
		return true;
	}

	@Override
	public void clear() {
		wrappedSet.clear();
		
	}

	@Override
	public boolean contains(Object o) {
		return wrappedSet.contains(o);
	}

	@Override
	public boolean containsAll(Collection<?> c) {
		return wrappedSet.containsAll(c);
	}

	@Override
	public boolean isEmpty() {
		return wrappedSet.isEmpty();
	}

	@Override
	public Iterator<E> iterator() {
		return wrappedSet.iterator();
	}

	@Override
	public boolean remove(Object o) {
		return wrappedSet.remove(o);
	}

	@Override
	public boolean removeAll(Collection<?> c) {
		return wrappedSet.removeAll(c);
	}

	@Override
	public boolean retainAll(Collection<?> c) {
		return wrappedSet.retainAll(c);
	}

	@Override
	public int size() {
		return wrappedSet.size();
	}

	@Override
	public Object[] toArray() {
		return wrappedSet.toArray();
	}

	@Override
	public <T> T[] toArray(T[] a) {
		return wrappedSet.toArray(a);
	}



}
