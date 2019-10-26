package com.jbt.gilandyaniv.CouponSystemProject;

import static org.junit.Assert.assertTrue;

import java.util.HashSet;
import java.util.Set;

import org.junit.Test;

import com.jbt.gilandyaniv.CouponSystemProject.utils.NoNullSet;

public class NoNullHashSetTest {

	
	@Test(expected = IllegalArgumentException.class)
	public void whenAddingNullToSet_thenThrowException() {
		Set<String> set = new NoNullSet<String>();
		
		set.add("hi");
		set.add("Hello");
		set.add(null);
	}
	
	@Test
	public void whenAddingNullToSetViaAddAll_thenReturnFalse() {
		Set<String> set = new NoNullSet<String>();
		
		Set<String> args = new HashSet<String>();
		args.add("Hi");
		args.add(null);
		args.add("Hello");
		
		assertTrue(!set.addAll(args));
	}
	
}
